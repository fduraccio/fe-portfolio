import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "education-card",
  templateUrl: "./education-card.component.html",
  styleUrls: ["./education-card.component.scss"],
})
export class EducationCardComponent implements OnInit {
  @Input() title: string = "";
  @Input() startDate: string = "Jan 2020";
  @Input() endDate: string = "Present";
  @Input() description: string = "";
  @Input() location: string ='test'

  constructor() {}

  ngOnInit(): void {}
}
