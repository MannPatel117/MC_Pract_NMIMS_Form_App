import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
export interface Note {
  id?:string;
  name:String;
  address_line1:String;
  address_line2:String;
  city:String;
  state:String;
  zipcode:String;
  email:String;
  gender:String;
  marks_12:number;
  marks_10:number;
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private firestore: Firestore) { }
  getNotes(): Observable<Note[]>
  {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Note[]>;
  }   
  
  getNoteById(id): Observable<Note>{
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as Observable<Note>;
  }
  addNote(note: Note)
  {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }
}
