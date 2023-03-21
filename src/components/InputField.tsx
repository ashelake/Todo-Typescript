import React from 'react'
import { Input, Center } from '@chakra-ui/react'
interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}
const InputField = ({todo,setTodo,handleAdd}:Props) => {
  return (
    <Center>
    <form onSubmit={handleAdd}>
        <Input value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter TODO......."  width='auto'  />
        <Input width="80px" type="submit" placeholder="Submit"></Input>
    </form>
    </Center>
  )
}

export default InputField