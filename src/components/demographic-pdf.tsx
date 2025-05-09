import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import logo from "../assets/barangay-logo.png";
type DemographicData = {
  totalPopulation: number;
  female: number;
  male: number;
  legalAge: number;
  minorAge: number;
  topEducationLevel: number;
  employmentStatus: number;
  unemployed: number;
  selftemployed: number;
  student: number;
  retired: number;
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#f8f9fa",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    alignSelf: "center",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#2c3e50",
  },
  section: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    border: "1px solid #ddd",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    color: "#555",
  },
});

const DemographicPDF: React.FC<{ data: DemographicData }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={logo} style={styles.logo} />
      <Text style={styles.heading}>Demographic Details Report</Text>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Total Population</Text>
          <Text style={styles.value}>{data.totalPopulation}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Female</Text>
          <Text style={styles.value}>{data.female}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Male</Text>
          <Text style={styles.value}>{data.male}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Legal Age</Text>
          <Text style={styles.value}>{data.legalAge}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Minor Age</Text>
          <Text style={styles.value}>{data.minorAge}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Top Education Level</Text>
          <Text style={styles.value}>{data.topEducationLevel}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Employed</Text>
          <Text style={styles.value}>{data.employmentStatus}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Unemployed</Text>
          <Text style={styles.value}>{data.unemployed}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Selft-Employed</Text>
          <Text style={styles.value}>{data.selftemployed}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Student</Text>
          <Text style={styles.value}>{data.student}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Retired</Text>
          <Text style={styles.value}>{data.retired}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export const exportPDF = (data: DemographicData) => {
  const doc = <DemographicPDF data={data} />;
  const blob = pdf(doc).toBlob();

  // Trigger file download
  blob.then((file) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "demographic_report.pdf"; // File name
    link.click();
  });
};

export default DemographicPDF;
