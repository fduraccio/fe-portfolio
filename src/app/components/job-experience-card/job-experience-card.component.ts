import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "job-experience-card",
  templateUrl: "./job-experience-card.component.html",
  styleUrls: ["./job-experience-card.component.scss"],
})
export class JobExperienceCardComponent {
  @Input() jobTitle: string = "Front-end Software Engineer";
  @Input() contractType: string = "Contract";
  @Input() startDate: string = "Jan 2020";
  @Input() endDate: string = "Present";
  @Input() location: string = "Manaus, AM - Brazil";
  @Input() companyName: string = "Company Name";
  @Input() descriptions: string[] =
    ["Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
  @Input() description2: string =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
}
