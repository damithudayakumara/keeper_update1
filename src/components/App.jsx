import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Notes from "./notes";

// function keeper(notes) {
//   return <Note title={notes.title} content={notes.content} />;
// }

function App() {
  return (
    <div>
      <Header />
      {Notes.map((notes) => (
        <Note title={notes.title} content={notes.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
