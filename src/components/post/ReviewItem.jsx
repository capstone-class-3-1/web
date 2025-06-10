import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownBox from "./MarkdownBox";
import '../../styles/components/post/ReviewItem.css'

const mockMarkdown = `
## asdf  
* [ ] to do

안녕
안녕  
ddd  

\`\`\`js
// Usage with the Nord theme
import { CodeBlock, nord} from 'react-code-blocks';
const MyCodeComponent = () => (
  <CopyBlock
    text="HELLO WORLD"
    theme={nord}
    language="text"
  />
)
\`\`\`
dfsdf
`

const ReviewItem = () => {
    return(
        <div className="ReviewItem">
            <div className="reviewer_name">
                <div className="reviewer_profile"></div><span>jinhyeon-dev</span>
            </div>
            <div className="ReviewBox">
                <MarkdownBox text={mockMarkdown}/>
            </div>
        </div>
    )
}

export default ReviewItem;