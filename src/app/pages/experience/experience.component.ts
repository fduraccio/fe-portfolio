import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChildren("experienceEntry")
  experienceEntries?: QueryList<ElementRef<HTMLElement>>;
  revealedEntries: boolean[] = [];
  private experienceObserver?: IntersectionObserver;

   experiences = [
    {
      jobTitle: "AI Solution Lead",
      focusArea: "AI Delivery",
      contractType: "Consultant",
      startDate: "Oct 2025",
      endDate: "Present",
      location: "Milano, Italy",
      companyName: "Silicon Shoring FS Reply",
      descriptions: [
        "Lead delivery for a conversational assistant in the credit and lending domain for Credit Agricole, coordinating front-end and back-end streams.",
        "Shape AI-driven journeys for credit approval, mortgage simulation, and loan support through conversational workflows and AI agents.",
        "Drive technical alignment around OpenAI GPT integrations, GitHub Copilot adoption, and cloud-native delivery across AWS and Azure."
      ]
    },
    {
      jobTitle: "Lead Front-End Developer",
      focusArea: "Frontend Architecture",
      contractType: "Consultant",
      startDate: "Jan 2025",
      endDate: "Oct 2025",
      location: "Milano, Italy",
      companyName: "Silicon Shoring FS Reply",
      descriptions: [
        "Led front-end delivery across enterprise banking initiatives with a focus on scalable architecture and modern Angular patterns.",
        "Owned the front-end stream for the SDLC AI Platform, supporting software delivery workflows through AI-powered automation and collaboration features.",
        "Designed Angular 18 solutions connected to AWS, Azure, Docker, and Kubernetes environments, including streaming conversational interfaces."
      ]
    },
    {
      jobTitle: "Lead Front-End Developer",
      focusArea: "Omnichannel Banking",
      contractType: "Consultant",
      startDate: "Oct 2023",
      endDate: "Jan 2025",
      location: "Milano, Italy",
      companyName: "Iriscube Reply",
      descriptions: [
        "Coordinated the modernization of internal banking applications for Intesa Sanpaolo Filiale Digitale, moving legacy flows toward future-ready platforms.",
        "Led development for IsyPrestito at IsyBank, coordinating a team of 5 developers across a lending experience spanning digital and branch channels.",
        "Strengthened delivery planning, estimation, and performance management while contributing to BPER initiatives built with Angular 14 and microfrontends."
      ]
    },
    {
      jobTitle: "Lead Front-End Developer",
      focusArea: "Hybrid Experiences",
      contractType: "Consultant",
      startDate: "Oct 2022",
      endDate: "Oct 2023",
      location: "Milano, Italy",
      companyName: "Iriscube Reply",
      descriptions: [
        "Led a team of 4 developers on Anticipo Stipendio and Spensierata journeys for IsyBank after being promoted to lead front-end responsibilities.",
        "Built a hybrid Angular application embedded in IsyBank’s mobile app, designed to evolve toward a fully web-based solution.",
        "Translated Adobe XD prototypes into reusable lending flows while streamlining CI/CD practices through Bitbucket and Jenkins."
      ]
    },
    {
      jobTitle: "Front-End Developer",
      focusArea: "Scalable UI Foundations",
      contractType: "Consultant",
      startDate: "Oct 2020",
      endDate: "Oct 2022",
      location: "Milano, Italy",
      companyName: "Iriscube Reply",
      descriptions: [
        "Worked on Retail Lending Open for Intesa Sanpaolo, improving the loan sales experience through responsive and dynamic interfaces.",
        "Designed scalable Angular 7 solutions with strong attention to API integration, debugging, and front-end optimization.",
        "Built reusable UI components in a microservices ecosystem with a focus on maintainability and long-term scalability."
      ]
    },
    {
      jobTitle: "Master Thesis Researcher",
      focusArea: "Applied AI Research",
      contractType: "Researcher",
      startDate: "Sep 2022",
      endDate: "May 2023",
      location: "Milano, Italy",
      companyName: "AIRLab POLIMI",
      descriptions: [
        "Researched emotion detection in wearable device networks using Python and accelerometer data to improve human-machine interaction.",
        "Applied RNN, CNN, and DNN models for emotion classification and tested the system with a custom robot in the Physical Metaverse.",
        "Published the thesis 'Exploiting Accelerometers for Emotion Recognition in the Physical Metaverse Context' at Politecnico di Milano."
      ]
    },
    {
      jobTitle: "Software Engineering Intern",
      focusArea: "Data Automation",
      contractType: "Intern",
      startDate: "May 2020",
      endDate: "July 2020",
      location: "Salerno, Remote",
      companyName: "Sense Square",
      descriptions: [
        "Designed and implemented a Python-based ETL tool to process and analyze atmospheric pollution data.",
        "Automated data pipelines to improve consistency, efficiency, and reduce manual intervention."
      ]
    }
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.revealedEntries = this.experiences.map(() => false);

    if (!this.experienceEntries?.length) {
      return;
    }

    const revealEntry = (index: number) => {
      this.revealedEntries[index] = true;
    };

    if (typeof IntersectionObserver === "undefined") {
      this.revealedEntries = this.experiences.map(() => true);
      return;
    }

    this.experienceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number(
            (entry.target as HTMLElement).dataset["experienceIndex"] ?? -1
          );

          if (index < 0 || this.revealedEntries[index]) {
            return;
          }

          this.ngZone.run(() => revealEntry(index));
          this.experienceObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    this.experienceEntries.forEach((entryRef, index) => {
      entryRef.nativeElement.dataset["experienceIndex"] = `${index}`;
      this.experienceObserver?.observe(entryRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.experienceObserver?.disconnect();
  }

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "assets/Academic_CV_FedericaDuraccio_05-2026.pdf";
    link.download = "Academic_CV_FedericaDuraccio_05-2026.pdf";
    link.click();
  }
}
