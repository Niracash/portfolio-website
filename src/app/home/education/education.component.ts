import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


type Subject = {
  name: string;
  level: 'Beginner' | 'Experienced' | 'Advanced';
};

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})


export class EducationComponent {
  selectedLevel: string = 'All';

  mandatorySubjects: Subject[] = [
    { name: 'Final fullstack project - programming', level: 'Advanced' },
    { name: 'App Programming I', level: 'Experienced' },
    { name: 'App Programming II', level: 'Advanced' },
    { name: 'App Programming III', level: 'Advanced' },
    { name: 'Client-side Programming', level: 'Experienced' },
    { name: 'Computer Technology', level: 'Advanced' },
    { name: 'Database Programming', level: 'Advanced' },
    { name: 'Embedded Controller I', level: 'Beginner' },
    { name: 'Embedded Controller II', level: 'Experienced' },
    { name: 'Embedded Controller III', level: 'Experienced' },
    { name: 'Basic Programming', level: 'Advanced' },
    { name: 'GUI Programming', level: 'Advanced' },
    { name: 'IT Requirements Specification', level: 'Experienced' },
    { name: 'IT Service Management I', level: 'Experienced' },
    { name: 'Linux for Servers and Embedded', level: 'Experienced' },
    { name: 'Cisco Network', level: 'Experienced' },
    { name: 'Object-Oriented Programming', level: 'Experienced' },
    { name: 'Programming Methodology', level: 'Experienced' },
    { name: 'Project Management', level: 'Experienced' },
    { name: 'Server Administration and Security', level: 'Experienced' },
    { name: 'Server-side Programming', level: 'Advanced' },
    { name: 'Server Technology - Database Server', level: 'Experienced' },
    { name: 'Server Technology - Linux', level: 'Experienced' },
    { name: 'Server Technology', level: 'Experienced' },
    { name: 'Software Testing and Security', level: 'Experienced' },
    { name: 'Software Development', level: 'Advanced' },
    { name: 'Version Control and Documentation', level: 'Experienced' },
  ];

  electiveSubjects: Subject[] = [
    { name: 'Communication', level: 'Experienced' },
    { name: 'Object-Oriented Analysis and Design', level: 'Experienced' },
    { name: 'Programming Java IV', level: 'Advanced' },
  ];
  get filteredMandatory(): Subject[] {
    return this.selectedLevel === 'All'
      ? this.mandatorySubjects
      : this.mandatorySubjects.filter(subject => subject.level === this.selectedLevel);
  }

  get filteredElectives(): Subject[] {
    return this.selectedLevel === 'All'
      ? this.electiveSubjects
      : this.electiveSubjects.filter(subject => subject.level === this.selectedLevel);
  }
}
