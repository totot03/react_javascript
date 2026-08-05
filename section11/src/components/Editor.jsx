import "../css/Editor.css"
import { useState, useRef, useContext } from "react"
import { TodoDispatchContext } from "../App"

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext)
  const [content, setContent] = useState('')
  const inputRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = (e) => {
    if(content === ''){
      inputRef.current.focus();
      return
    }
    onCreate(content)
    setContent("")
  }

  const onKeyDownContent = (e) => {
    if(e.keyCode === 13){
      onSubmit()
    }
  }

    return (
    <div className="Editor">
      <input 
      type="text" 
      ref = {inputRef}
      value={content} 
      placeholder="오늘의 할일을 입력" 
      onChange={onChangeContent} 
      onKeyDown={onKeyDownContent} />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;