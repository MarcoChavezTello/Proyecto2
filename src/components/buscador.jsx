import React from 'react'

export const Buscador = (props)=>{

    const handleChange = e => {
		props.searchData(e.target.value);
	};

    return(
        <form className="formSearch">
			<input type="text" placeholder="Rick" name="search" id="search" onChange={handleChange} />
		</form>
    );
}