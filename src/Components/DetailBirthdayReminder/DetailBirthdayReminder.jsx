import React from 'react';
import PropTypes from 'prop-types';

DetailBirthdayReminder.propTypes = {

};

function DetailBirthdayReminder(props) {
    const { value } = props;
    return (
        <div className="detail-birthday-reminder d-flex">
            <img src= {value.image} alt="" />
            <div className="detail-person">
                <p className="name">{value.name}</p>
                <p className="old">{value.age} years</p>
            </div>
        </div>
    );
}

export default DetailBirthdayReminder;