import Flame from "../product-flame-img/product-flame-img.component";
import css from "./product-new-tag.styles.module.css"

export const Variant_2_Styles = {backgroundColor : "#fff" , margin : "1rem"}

const NewTag = (props) => {
    return (
        <div {...props} className={css["new-tag-container"]}>
            <div>
                <Flame/>
                <span>NEW</span>
            </div>
        </div> 
    )
}


export default NewTag;