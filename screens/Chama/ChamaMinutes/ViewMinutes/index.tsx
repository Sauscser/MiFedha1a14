import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { API, graphqlOperation, Storage } from "aws-amplify";
import RNPrint from "react-native-print";

import {
  listMinutesByChama,
  listMinuteItemsByMinutes,
  listAttendanceByMinutes,
} from "../../../../src/graphql/queries";

const ViewMinutesScreen = ({ route }) => {
  const { grpContact, groupName } = route.params;

  const [minutesList, setMinutesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMinutes();
  }, []);

  /* =========================
     FETCH & ENRICH MINUTES
     ========================= */
  const fetchMinutes = async () => {
    try {
      const res = await API.graphql(
        graphqlOperation(listMinutesByChama, {
          grpContact,
          sortDirection: "DESC",
        })
      );

      const minutes = res.data.listMinutesByChama.items || [];

      const enriched = await Promise.all(
        minutes.map(async (min) => {
          const [itemsRes, attendanceRes] = await Promise.all([
            API.graphql(
              graphqlOperation(listMinuteItemsByMinutes, {
                minutesId: min.id,
              })
            ),
            API.graphql(
              graphqlOperation(listAttendanceByMinutes, {
                minutesId: min.id,
              })
            ),
          ]);

          const chairSignUrl = min.chairpersonId
            ? await Storage.get(min.chairpersonId)
            : null;

          const secSignUrl = min.secretaryId
            ? await Storage.get(min.secretaryId)
            : null;

          return {
            ...min,
            items: itemsRes.data.listMinuteItemsByMinutes.items || [],
            attendance:
              attendanceRes.data.listAttendanceByMinutes.items || [],
            chairSignUrl,
            secSignUrl,
          };
        })
      );

      setMinutesList(enriched);
    } catch (error) {
      console.log("Error loading minutes:", error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     PDF EXPORT
     ========================= */
  const exportToPDF = async (min) => {
    try {
      const present = min.attendance.filter(
        (a) => a.attendanceStatus === "PRESENT"
      );

      const html = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial;
                padding: 24px;
              }
              h1 {
                color: #e29d58;
              }
              h2 {
                margin-top: 20px;
                border-bottom: 1px solid #ccc;
              }
              .item {
                margin-bottom: 12px;
              }
              .decision {
                font-style: italic;
                color: #065f46;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
              }
              th, td {
                border: 1px solid #ddd;
                padding: 8px;
              }
              .signatures {
                margin-top: 40px;
                display: flex;
                justify-content: space-between;
              }
              img {
                max-height: 80px;
              }
            </style>
          </head>

          <body>
            <h1>${groupName} — Official Minutes</h1>

            <p><strong>Date:</strong> ${min.meetingDate}</p>
            <p><strong>Venue:</strong> ${min.venue || "-"}</p>
            <p><strong>Attendance:</strong> ${present.length}</p>

            <h2>Minutes</h2>
            ${min.items
              .sort((a, b) => a.entryOrder - b.entryOrder)
              .map(
                (i) => `
                <div class="item">
                  <strong>${i.entryOrder}. ${i.minuteRef}</strong>
                  <p>${i.content}</p>
                  ${
                    i.decision
                      ? `<div class="decision">Decision: ${i.decision}</div>`
                      : ""
                  }
                </div>
              `
              )
              .join("")}

            <h2>Attendance Register</h2>
            <table>
              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>
              ${min.attendance
                .map(
                  (a) => `
                  <tr>
                    <td>${a.memberName}</td>
                    <td>${a.attendanceStatus}</td>
                  </tr>
                `
                )
                .join("")}
            </table>

            <div class="signatures">
              <div>
                <strong>Chairperson</strong><br/>
                ${
                  min.chairSignUrl
                    ? `<img src="${min.chairSignUrl}" />`
                    : "-"
                }
              </div>

              <div>
                <strong>Secretary</strong><br/>
                ${
                  min.secSignUrl
                    ? `<img src="${min.secSignUrl}" />`
                    : "-"
                }
              </div>
            </div>
          </body>
        </html>
      `;

      await RNPrint.print({ html });
    } catch (err) {
      Alert.alert("PDF Error", "Unable to export minutes");
    }
  };

  /* =========================
     UI
     ========================= */
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e29d58" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.groupTitle}>{groupName} — Minutes</Text>

      {minutesList.map((min) => {
        const presentCount = min.attendance.filter(
          (a) => a.attendanceStatus === "PRESENT"
        ).length;

        return (
          <View key={min.id} style={styles.card}>
            <Text style={styles.date}>📅 {min.meetingDate}</Text>
            <Text style={styles.meta}>Venue: {min.venue}</Text>
            <Text style={styles.meta}>
              Attendance: {presentCount}
            </Text>

            <TouchableOpacity
              style={styles.exportBtn}
              onPress={() => exportToPDF(min)}
            >
              <Text style={styles.exportText}>Export PDF</Text>
            </TouchableOpacity>

            <Text style={styles.section}>Minutes</Text>
            {min.items
              .sort((a, b) => a.entryOrder - b.entryOrder)
              .map((item) => (
                <View key={item.id} style={styles.minuteItem}>
                  <Text style={styles.minuteTitle}>
                    {item.entryOrder}. {item.minuteRef}
                  </Text>
                  <Text>{item.content}</Text>
                  {item.decision && (
                    <Text style={styles.decision}>
                      Decision: {item.decision}
                    </Text>
                  )}
                </View>
              ))}

            <Text style={styles.section}>Signatures</Text>
            <View style={styles.signatures}>
              {min.chairSignUrl && (
                <Image
                  source={{ uri: min.chairSignUrl }}
                  style={styles.signature}
                />
              )}
              {min.secSignUrl && (
                <Image
                  source={{ uri: min.secSignUrl }}
                  style={styles.signature}
                />
              )}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ViewMinutesScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  groupTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#212529",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  date: {
    fontSize: 15,
    fontWeight: "600",
    color: "#495057",
  },

  meta: {
    fontSize: 14,
    color: "#6c757d",
    marginTop: 2,
  },

  section: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
    color: "#343a40",
  },

  minuteItem: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dee2e6",
  },

  minuteTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
    color: "#212529",
  },

  decision: {
    marginTop: 4,
    fontStyle: "italic",
    color: "#0f5132",
  },

  signatures: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  signature: {
    width: 140,
    height: 70,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  exportBtn: {
    marginTop: 12,
    alignSelf: "flex-end",
    backgroundColor: "#e29d58",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  exportText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
