import React from "react";
import logo from "../assets/barangay-logo.png";
import { residentType } from "../type/user/resident-profilling-zod";
import { formatDate } from "../utils/format-date";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#f4f6f8",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    alignSelf: "center",
  },
  heading: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
    color: "#2c3e50",
    textTransform: "uppercase",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 6,
    border: "1px solid #ccc",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontWeight: "bold",
    width: "40%",
    color: "#333",
  },
  value: {
    width: "60%",
    textAlign: "right",
    color: "#555",
  },
});

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const ResidentPDF: React.FC<{ data: residentType[] }> = ({ data }) => {
  const filteredData = data.filter(
    (person: residentType) =>
      person.descriptor !== undefined &&
      person.descriptor.length > 0 &&
      person.archived === false
  );

  const pages = chunkArray(filteredData, 2); // Group by 2

  return (
    <Document>
      {pages.map((residents, index) => (
        <Page key={index} size="A4" style={styles.page}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.heading}>Resident Information Report</Text>

          {residents.map((resident, idx) => (
            <View key={idx} style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.value}>{resident.lastName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Middle Name</Text>
                <Text style={styles.value}>{resident.middlename}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.value}>{resident.firstName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Age</Text>
                <Text style={styles.value}>{resident.age}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Date of Birth</Text>
                <Text style={styles.value}>
                  {formatDate(resident.dateofbirth)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Mobile Number</Text>
                <Text style={styles.value}>{resident.mobilenumber}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <Text style={styles.value}>{resident.city}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Province</Text>
                <Text style={styles.value}>{resident.province}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Street Name</Text>
                <Text style={styles.value}>{resident.streetname}</Text>
              </View>
            </View>
          ))}
        </Page>
      ))}
    </Document>
  );
};

export const exportResidentPDF = (data: residentType[]) => {
  const blobPromise = pdf(<ResidentPDF data={data} />).toBlob();
  blobPromise.then((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `resident_report.pdf`;
    link.click();
  });
};

export default ResidentPDF;
