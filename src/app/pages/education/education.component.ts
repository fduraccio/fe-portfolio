import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  educations = [
    {
      title: "Master Degree in Computer Science and Engineering",
      institution: "Politecnico di Milano",
      grade: "106/110",
      focus: "Thesis focused on emotion recognition, wearable data, and AI models in the Physical Metaverse context.",
      milestoneLabel: "Research & AI",
      startDate: "Sept 2020",
      endDate: "May 2023",
      location: "Milan, Italy"
    },
    {
      title: "Bachelor Degree in Computer Engineering",
      institution: "Università degli Studi di Salerno",
      grade: "110L/110",
      focus: "Built a strong foundation in software engineering, systems thinking, and analytical problem solving.",
      milestoneLabel: "Engineering Foundations",
      startDate: "Sept 2017",
      endDate: "July 2020",
      location: "Salerno, Italy"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
