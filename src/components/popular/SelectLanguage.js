import React from 'react'
import { PropTypes } from 'prop-types';

const SelectLanguage = (props) => {

    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    
    return (
        <div>
            <ul className='nav'>
                {languages.map(function(language) { return(
                    <li
                        className={language === props.selectedLanguage ? `li-active` : null}
                        onClick={props.onSelect.bind(null, language)}
                        key={language}> 
                        {language}
                    </li>)        
                })}
            </ul>
        </div>
    )
}


SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default SelectLanguage