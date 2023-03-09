import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import {Sub} from './types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const initial_state = [
  {
    nick: "dapelu",
    subMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "dapelu lalalala"
  },
  {
    nick: "mesi",
    subMonths: 50,
    avatar: "https://i.pravatar.cc/150?u=messi",
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(initial_state)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }


  return ( 
    <div ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App;
