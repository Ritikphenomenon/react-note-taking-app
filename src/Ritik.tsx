class Note {
  id: number;
  title: string;
  content: string;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

class NoteApp {
  notes: Note[];
  nextId: number;

  constructor() {
    this.notes = [];
    this.nextId = 1;
  }

  addNote(title: string, content: string): void {
    const newNote = new Note(this.nextId, title, content);
    this.notes.push(newNote);
    this.nextId++;
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  displayNotes(): void {
    if (this.notes.length === 0) {
      console.log("No notes found.");
    } else {
      console.log("Notes:");
      this.notes.forEach(note => {
        console.log(`ID: ${note.id}, Title: ${note.title}`);
      });
    }
  }
}

// Example usage
const app = new NoteApp();
app.addNote("Shopping List", "1. Milk\n2. Bread\n3. Eggs");
app.addNote("Meeting Notes", "Discussed project timeline.");
app.displayNotes();

app.deleteNote(1);
app.displayNotes();
