import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
   experiences = [
    {
      jobTitle: "Lead Front-End Developer",
      contractType: "Consultant",
      startDate: "Oct 2023",
      endDate: "Present",
      location: "Milano, Italia",
      companyName: "Iriscube Reply",
      descriptions: [
        "Modernized internal banking systems for Intesa Sanpaolo Filiale Digitale, reducing processing time by 25% and enabling scalability for over 8 million users.",
        "Led a team of 5 to develop IsyPrestito, a digital lending solution, achieving a 40% increase in loan applications via a seamless omnichannel solution adopted by 3,000+ branches.",
        "Optimized resource planning, increasing team productivity by 20% through efficient micro-planning and performance evaluations.",
        "Built a customer account workflow for BPER, using Angular 14 and Microfrontend architecture, powered by Webpack, delivering a scalable solution."
      ]
    },
    {
      jobTitle: "Lead Front-End Developer",
      contractType: "Consultant",
      startDate: "Oct 2022",
      endDate: "Oct 2023",
      location: "Milano, Italia",
      companyName: "Iriscube Reply",
      descriptions: [
        "Promoted to Lead Developer, managing 4 developers to launch Anticipo Stipendio and Spensierata, driving a 20% increase in customer engagement and expanding IsyBank’s digital lending reach.",
        "Created a hybrid Angular app for IsyBank’s Mobile App, supporting over 450,000 active users.",
        "Enhanced UI with Adobe XD prototypes, improving customer satisfaction scores by 20%.",
        "Designed reusable, customizable loan processes, enabling a 40% reduction in time-to-market for new digital finance products."
      ]
    },
    {
      jobTitle: "Front-End Developer",
      contractType: "Consultant",
      startDate: "Oct 2020",
      endDate: "Oct 2022",
      location: "Milano, Italia",
      companyName: "Iriscube Reply",
      descriptions: [
        "Contributed as a Front-End Developer for Retail Lending Open at Intesa Sanpaolo, enhancing the customer journey by streamlining the lending process and reducing page load times by 40%.",
        "Designed scalable, responsive interfaces using Angular 7, increasing development efficiency by 15% through reusable components.",
        "Built reusable UI components in a Microservices architecture, ensuring seamless integration and reducing debugging time by 30%."
      ]
    },
    {
      jobTitle: "Master Thesis Researcher",
      contractType: "Researcher",
      startDate: "Sep 2022",
      endDate: "May 2023",
      location: "Milano, Lombardia, Italia",
      companyName: "AIRLab POLIMI",
      descriptions: [
        "Researched emotion detection using Python and accelerometers in wearable device networks, achieving 85% classification accuracy with RNNs, CNNs, and DNNs.",
        "Tested algorithms on a custom robot in the Physical Metaverse, reducing detection latency by 20%.",
        "Publication: 'Exploiting Accelerometers for Emotion Recognition in the Physical Metaverse Context.' Master’s Thesis, Politecnico di Milano, Cirillo, Pasquale; Duraccio, Federica (May 4, 2023)."
      ]
    },
    {
      jobTitle: "Software Engineering Intern",
      contractType: "Intern",
      startDate: "May 2020",
      endDate: "Jul 2020",
      location: "Salerno, Remote",
      companyName: "Sense Square",
      descriptions: [
        "Designed and implemented a Python-based ETL tool to process and analyze atmospheric pollution data, improving processing efficiency and data workflow automation.",
        "Automated data pipelines to ensure accuracy and consistency, reducing manual intervention significantly."
      ]
    }
  ];


  constructor() {}

  ngOnInit(): void {}

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "assets/Academic_CV_FedericaDuraccio_S.pdf"; // Percorso relativo al file PDF
    link.download = "Academic_CV_FedericaDuraccio.pdf"; // Nome che avrà il file scaricato
    link.click(); // Simula il click per avviare il download
  }
}
