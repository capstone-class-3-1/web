import { useRef, useState } from "react";
import MarkdownBox from "./MarkdownBox";
import Button from "../Button";
import { LuHeading } from "react-icons/lu";
import { LuCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuList } from "react-icons/lu";
import '../../styles/components/post/WriteReview.css';


const WriteReview = () => {
    const [reviewText, setReviewText] = useState('');
    const [reviewStatus, setReviewStatus] = useState('write');

    const reviewRef = useRef();

    const insertMarkdown = (start, end) => {
        const reviewArea = reviewRef.current;
        const {selectionStart, selectionEnd, value} = reviewArea;
        console.log(selectionStart,selectionEnd,value);

        const before = value.substring(0, selectionStart);
        const after = value.substring(selectionEnd);

        const selectText = value.substring(selectionStart, selectionEnd);

        let newValue;

        if(end){
            newValue = before + start + selectText + end + after;
        }
        else newValue = before + start + selectText + after;

        reviewArea.value = newValue;

        const newCursor = selectionStart + start.length;
        reviewArea.selectionStart = newCursor;
        reviewArea.selectionEnd = newCursor;

        setReviewText(newValue);
        reviewArea.focus();
    }

    return(
        <div className="WriteReview">
            <div className="ReviewBox">
                <div className="review_header">
                    {
                        reviewStatus === 'write' && (
                            <>
                                <button className="markdown_button" onClick={()=>insertMarkdown('## ')}><LuHeading /></button>
                                <button className="markdown_button" onClick={()=>insertMarkdown('```js\n', '\n```')}><LuCode /></button>
                                <button className="markdown_button" onClick={()=>insertMarkdown('* [ ] to do')}><LuListTodo /></button>
                                <button className="markdown_button" onClick={()=>insertMarkdown('- ')}><LuList /></button>
                            </>
                        )
                    }
                    <div className="rank_toggle">
                        <button className={reviewStatus==='write' && `focus`} onClick={()=>setReviewStatus('write')}>write</button>
                        <button className={reviewStatus==='view' && `focus`} onClick={()=>setReviewStatus('view')}>view</button>
                    </div>
                </div>
            {
                reviewStatus==='write' ? 
                (
                    <textarea className="review_textarea" ref={reviewRef} cols="30" rows="5" onChange={(e)=>setReviewText(e.target.value)} value={reviewText}/>
                ) : 
                (
                    <MarkdownBox text={reviewText}/>
                )
            }
            </div>
            <div className="button_container">
                <Button value={'취소하기'} onclick={()=>{navigate('/community/post')}}/>
                <Button value={'리뷰작성'} onclick={()=>{navigate('/community/post')}}/>
            </div>
        </div>
    )
}

export default WriteReview;