import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function FAQ({ faq }) {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-gray-800 text-2xl font-bold">{faq.question}</div>
        <div onClick={()=>{setShowAnswer(!showAnswer)}} className={`text-gray-700 text-2xl flex justify-center items-center h-7 aspect-square font-bold transition-all duration-300 ${showAnswer&& 'rotate-90'}`}><MdKeyboardArrowRight /></div>
      </div>
      {
        showAnswer &&
        <div className="text-xl text-gray-700 ">{faq.answer}</div>
      }
      <div className="h-px mt-2 bg-slate-200 rounded-full" />
    </div>
  )
}