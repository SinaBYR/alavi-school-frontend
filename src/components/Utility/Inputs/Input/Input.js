import classes from './Input.module.css';
import { FastField, Field } from "formik";
import React, { useEffect, useState } from 'react';
import { BiError } from 'react-icons/bi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

export const Input = ({ label, type, name, error, groupClassName, elements, inputConfig, labelConfig, parentConfig, style, accept}) => {

    const [passVisible, setPassVisible] = useState(false);
    let element;

        switch (type) {
            case 'text': {
                element = <Field type="text" name={name} {...inputConfig} style={{borderColor: error && 'red'}} />
                break;
            }
            case 'email': {
                element = <FastField type="email" name={name} {...inputConfig} style={{borderColor: error && 'red'}} />
                break;
            }
            case 'password': {
                element = (
                    <>
                        <Field type={passVisible ? 'text' : 'password'} name={name} {...inputConfig} style={{borderColor: error && 'red'}} />
                        <button className={classes.PasswordVisibility} onClick={() => setPassVisible(!passVisible)} type="button">
                            {
                                passVisible ? <AiFillEye /> : <AiFillEyeInvisible />
                            }
                        </button>
                    </>
                )
                break;
            }
            case 'file': {
                element = <input type="file" name={name} accept={accept} {...inputConfig} style={{borderColor: error && 'red'}}/>
                break;
            }
            case 'textarea': {
                element = <FastField as="textarea" name={name} {...inputConfig} style={{borderColor: error && 'red', ...style}} />
                break;
            }
            case 'radio': {
                // const radios = [{value: 'male', text: 'Male'}, {value: 'female', text: 'Female'}];
                element = (
                    <div className={groupClassName} style={{border: error && '1px solid red'}}>
                        {
                            elements.map(radio => {
                                return (
                                    <div className={classes.Radio} tabIndex="0" key={radio.value}>
                                        <label htmlFor={radio.value}>{radio.text}</label>
                                        <Field
                                            type="radio"
                                            id={radio.value}
                                            name={name}
                                            value={radio.value}
                                            checked={radio.checked}
                                            disabled={radio.disabled}/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
                break;
            }
            case 'select': {
                element = (
                    <Field as="select" className={classes.Select} name={name}>
                        {
                            elements.map(option => {
                                return (
                                    <option value={option.value} disabled={option.disabled} key={option.value}>{option.text}</option>
                                )
                            })
                        }
                    </Field>
                )
                break;
            }
            case 'checkbox': {
                element = (
                    <div className={classes.Checkbox}>
                        <Field type="checkbox" name={name}/>
                        <div className={classes.FakeCheckbox}>
                            <FaCheck />
                        </div>
                    </div>
                )
                break;
            }
            default:
                element = null
                break;
        }

    return (
        <div className={classes.InputWrapper} {...parentConfig}>
            <label {...labelConfig}>{label}</label>
            {element}
            {
                error &&
                <p className={classes.DesktopError}><BiError />&nbsp;{error}</p>
            }
            {
                error &&
                <p className={classes.MobileError}><BiError />&nbsp;{error}</p>
            }
        </div>
    )
}