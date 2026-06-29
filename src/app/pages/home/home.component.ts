import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly skillCarouselThreshold = 3;
  @ViewChild("languagesSection") languagesSection?: ElementRef<HTMLElement>;
  languageStyles: { opacity: number; transform: string; filter: string }[] = [];

  constructor() {}

  ngOnInit(): void {}
  languages = [
    {
      label: "Angular 7-19",
      color: "#C69AFF",
    },
    {
      label: "AI product experiences",
      color: "#9F53FF",
    },
    {
      label: "Cloud platforms at scale",
      color: "#6104D6",
    },
  ];
  private readonly languageStepOffset = 0.18;
  private readonly languageStepSize = 0.36;

  // skills = [
  //   { label: 'React JS', icon: 'assets/icons/react-js.svg' },
  //   { label: 'React Native', icon: 'assets/icons/react-native.svg' },
  //   { label: 'Next.JS', icon: 'assets/icons/next-js.svg' },
  //   { label: 'Vite', icon: 'assets/icons/vite.svg' },
  //   { label: 'Figma', icon: 'assets/icons/figma.svg' },
  //   { label: 'Jest', icon: 'assets/icons/jest.svg' },
  //   {
  //     label: 'React Testing Library',
  //     icon: 'assets/icons/react-testing-library.svg',
  //   },
  // ];

  skillSets = [
    {
      title: "Front-End Engineering",
      skills: [
        {
          label: "Angular 7-19",
          icon: "assets/img/angular.svg",
        },
        {
          label: "TypeScript",
          icon: "assets/img/typescript.svg",
        },
        {
          label: "JavaScript",
          icon: "assets/img/javascript.svg",
        },
        {
          label: "HTML5",
          icon: "assets/img/html.svg",
        },
        {
          label: "CSS / SCSS",
          icon: "assets/img/css.svg",
        },
        {
          label: "REST APIs",
        },
        {
          label: "Bootstrap",
          icon: "assets/img/bootstrap.svg",
        },
        {
          label: "Microfrontends",
          icon: "assets/img/webpack.png",
        },
      ],
    },
    {
      title: "Architecture & Quality",
      skills: [
        {
          label: "Scalable UI Design",
        },
        {
          label: "Responsive Design",
        },
        {
          label: "Performance Optimization",
        },
        {
          label: "Web Accessibility",
        },
        {
          label: "Modular Design",
        },
        {
          label: "Karma / Testing",
        },
        {
          label: "Debugging",
        },
      ],
    },
    {
      title: "AI, Cloud & Platforms",
      skills: [
        {
          label: "OpenAI GPT",
        },
        {
          label: "GitHub Copilot",
        },
        {
          label: "Conversational AI",
        },
        {
          label: "AWS / Azure",
        },
        {
          label: "Docker / Kubernetes",
        },
        {
          label: "OpenShift / Jenkins",
        },
        {
          label: "CI/CD",
        },
      ],
    },
    {
      title: "Data, Tools & Collaboration",
      skills: [
        {
          label: "Kafka / MongoDB",
        },
        {
          label: "MySQL / PostgreSQL",
        },
        {
          label: "Pandas / NumPy",
          icon: "assets/img/python.svg",
        },
        {
          label: "Splunk / Kibana",
        },
        {
          label: "Git / Bitbucket",
          icon: "assets/img/git.svg",
        },
        {
          label: "Jira / Confluence / Teams",
        },
        {
          label: "Figma / Adobe XD",
          icon: "assets/img/figma.png",
        },
      ],
    },
  ];

  get useSkillCarousel(): boolean {
    return this.skillSets.length > this.skillCarouselThreshold;
  }

  ngAfterViewInit(): void {
    this.updateLanguageStyles();
  }

  ngOnDestroy(): void {
    // No manual subscriptions to clean up.
  }

  @HostListener("window:scroll")
  @HostListener("window:resize")
  onViewportChange(): void {
    this.updateLanguageStyles();
  }

  private updateLanguageStyles(): void {
    if (!this.languagesSection) {
      this.languageStyles = this.languages.map(() => this.createLanguageStyle(0));
      return;
    }

    const rect = this.languagesSection.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const start = viewportHeight * 0.9;
    const end = viewportHeight * 0.28;
    const denominator = Math.max(start - end, 1);
    const sectionProgress = this.clamp((start - rect.top) / denominator, 0, 1.35);

    this.languageStyles = this.languages.map((_, index) => {
      const lineProgress = this.clamp(
        (sectionProgress - index * this.languageStepOffset) / this.languageStepSize,
        0,
        1
      );

      return this.createLanguageStyle(lineProgress);
    });
  }

  private createLanguageStyle(progress: number): {
    opacity: number;
    transform: string;
    filter: string;
  } {
    const eased = 1 - Math.pow(1 - progress, 3);
    const translateY = (1 - eased) * 56;
    const scale = 0.97 + eased * 0.03;
    const blur = (1 - eased) * 10;

    return {
      opacity: Number(eased.toFixed(3)),
      transform: `translateY(${translateY.toFixed(1)}px) scale(${scale.toFixed(3)})`,
      filter: `blur(${blur.toFixed(1)}px)`,
    };
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "assets/Academic_CV_FedericaDuraccio_05-2026.pdf";
    link.download = "Academic_CV_FedericaDuraccio_05-2026.pdf";
    link.click();
  }
}
