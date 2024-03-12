import React, { useState } from 'react'
import { Paginations } from "./paginations"

export const Character = (props ) =>{

    const { character, info } = props.character;

	////////////////////////////////////////////////////////////////////
	const [showModal, setShowModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

	const openModal = (index) => {
        setSelectedCharacter(character[index]);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

	//CIERRA EL MODAL CUANDO SE DA CLIC FUERA DEL CONTENIDO DEL MODAL
	const handleOutsideClick = (e) => {
        if (e.target.className === 'modal') {
            closeModal();
        }
    };
	//////////////////////////////////////////////////////////////////

    return (
        <React.Fragment>
            <div className="characters">
                {character.map((character, index) => (
                    <div className="character" key={index} id={index} onClick={() => openModal(index)}>
                        <div className="image">
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div className="info">
                            <h2>{character.name}</h2>
                            <p className="origin">Status: <span>{character.status}</span></p>
                            <p className='origin'>Species: <span>{character.species}</span></p>
                            <p className='origin'>Location: <span>{character.location.name}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            {info.pages > 1 ? (
                <Paginations
                    nextPage={props.nextPage}
                    prevPage={props.prevPage}
                    page={props.page}
                />
            ) : null}
            
            {showModal && selectedCharacter && (
				
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content" >
                        <span className="close" onClick={closeModal}>&times;</span>
						<div className='modal-body'>	
							<div className="imageModal">
							<img src={selectedCharacter.image} alt={selectedCharacter.name} />
							</div>
							<div className="info">
								<h2>{selectedCharacter.name}</h2>
								<p className="origin">Status: <span>{selectedCharacter.status}</span></p>
								<p className='origin'>Species: <span>{selectedCharacter.species}</span></p>
								<p className='origin'>Gender: <span>{selectedCharacter.gender}</span></p>
								<p className='origin'>Location: <span>{selectedCharacter.location.name}</span></p>
								<p className='origin'>Origin: <span>{selectedCharacter.origin.name}</span></p>
								<p className="origin">First Seen: <span>{selectedCharacter.episode[0]}</span></p>
							</div>
						</div>
						
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};