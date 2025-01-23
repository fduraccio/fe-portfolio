import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  languages = [
    {
      label: "Typescript",
      color: "#C69AFF",
    },
    {
      label: "Angular",
      color: "#9F53FF",
    },
    {
      label: "Figma",
      color: "#6104D6",
    },
  ];

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
      title: "Frontend",
      skills: [
        {
          label: "Angular",
          icon: "./assets/img/angular.svg", // Modifica con il percorso corretto
        },
        {
          label: "HTML5",
          icon: "./assets/img/html.svg",
        },
        {
          label: "CSS3",
          icon: "./assets/img/css.svg",
        },
        {
          label: "Sass",
          icon: "./assets/img/sass.svg",
        },
        {
          label: "Bootstrap",
          icon: "./assets/img/bootstrap.svg",
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          label: "JavaScript",
          icon: "./assets/img/javascript.svg",
        },
        {
          label: "TypeScript",
          icon: "./assets/img/typescript.svg",
        },
        {
          label: "Python",
          icon: "./assets/img/python.svg",
        },
      ],
    },
    {
      title: "Dev Tools",
      skills: [
        {
          label: "Git",
          icon: "./assets/img/git.svg",
        },
        {
          label: "Bitbucket",
          icon: "./assets/img/bitbucket.svg",
        },

        {
          label: "VSCode",
          icon: "./assets/img/vscode.svg",
        },
      ],
    },
  ];

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "assets/Academic_CV_FedericaDuraccio.pdf"; // Percorso relativo al file PDF
    link.download = "Academic_CV_FedericaDuraccio.pdf"; // Nome che avrà il file scaricato
    link.click(); // Simula il click per avviare il download
  }
}
