import { Component, Input } from "@angular/core";

@Component({
  selector: "education-card",
  templateUrl: "./education-card.component.html",
  styleUrls: ["./education-card.component.scss"],
})
export class EducationCardComponent {
  @Input() variant: "featured" | "compact" = "featured";
  @Input() title: string = "";
  @Input() milestoneLabel: string = "Academic Milestone";
  @Input() startDate: string = "Jan 2020";
  @Input() endDate: string = "Present";
  @Input() institution: string = "";
  @Input() grade: string = "";
  @Input() focus: string = "";
  @Input() location: string = "";
}
