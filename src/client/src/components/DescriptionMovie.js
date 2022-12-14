import React, {useState} from "react";
import { Button } from "./Button";
import { Text } from "./Text";

const DescriptionMovie = ({limit, children}) => {
    const [isReadMore, setReadMore] = useState(false);
    
    const toggleBtn = () => {
        setReadMore(prevState => !prevState)
    }
    const tmp = children.length <= limit ? children : children.substr(0, limit).concat("...");

    return (
        <div className=" text-white font-normal ">
            <div className="max-w-[600px] max-h-[150px] overflow-y-auto">
            {isReadMore ? children : tmp}
            </div>
                <Button 
                    theme={ `text-slate-300 underline ${children.length <= limit ? 'hidden' : ''}`} 
                    onClick={toggleBtn}
                >
                <Text isHeader={false} 
                      text={isReadMore ? "Collapse" : "Read More"}
                />
            </Button>
        </div>
    )
}

export { DescriptionMovie };