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
      description: "Politecnico di Milano",
      startDate: "Oct 2020",
      endDate: "May 2023",
      location: "Milan, Italy"
    },
    {
      title: "Bachelor Degree in Computer Engineering",
      description: "Università degli Studi di Salerno",
      startDate: "Sept 2017",
      endDate: "Jul 2020",
      location: "Salerno, Italy"
    },
    {
      title: "High School Diploma",
      description: "Liceo Scientifico P.S. Mancini",
      startDate: "Sept 2012",
      endDate: "Jul 2017",
      location: "Avellino, Italy"
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
