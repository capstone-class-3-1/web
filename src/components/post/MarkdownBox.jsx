import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyBlock, monoBlue } from "react-code-blocks";


const MarkdownBox = ({text}) => {
    return(
        <Markdown 
            remarkPlugins={[remarkGfm]} 
            children={text} 
            components={{
                code({className, children, ...props}){
                    const match = /language-(\w+)/.exec(className || '');

                    return match ? (
                        <CopyBlock 
                            text={children}
                            theme={monoBlue}
                            language={match[1]}
                            showLineNumbers
                        />
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    )
                }
            }}
        />
    )
}

export default MarkdownBox;