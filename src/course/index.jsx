import {React , Component,lazy, Suspense} from "react";
const  Sub = lazy(() => import('./Sub'))
class Todo extends Component{
   
    constructor(props) {
        super(props)
    }

    render(){
        return ( 
            <>
                <Suspense fallback = {<div>Loading...</div>}>
                    <Sub/>
                </Suspense>
            </>
        )
    }

}

export {Todo}