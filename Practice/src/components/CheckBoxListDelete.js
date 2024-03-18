import { useState } from "react";

const CheckBoxListDelete = () => {
	const [list, setList] = useState([1, 2, 3, 4]);
	
    
    const setDelEle = (ele) => {
        let tempList = list.filter((listEle, index) => {
            return listEle != ele;
        });

        setList(tempList);
    }


	return (
		<div>
			{list.map((ele, index) => {
				return (
					<div key={ele}>
						{ele + " "}
                        <ListElement id={ele} setDelEle={setDelEle} />
					</div>
				);
			})}
		</div>
	);
};

const ListElement = ({id, setDelEle}) => {
	const [showDelete, setShowDelete] = useState(false);

	const clickHandler = () => {
		setShowDelete(!showDelete);
	};

	return (
		<div className="list-none inline">
			<li className="inline">
				<input
					type="checkbox"
					onClick={() => {
						clickHandler();
					}}
				/>
				<label> Checkbox </label>
				{showDelete && (
					<button
						className="bg-red-600 rounded-lg text-white w-[60px]"
						onClick={() => {
							setDelEle(id);
						}}>
						Delete
					</button>
				)}
			</li>
		</div>
	);
};

export default CheckBoxListDelete;
