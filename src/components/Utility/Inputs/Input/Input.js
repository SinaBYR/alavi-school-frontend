import classes from './Input.module.css';
import { FastField, Field } from "formik";
import React, { useEffect, useState } from 'react';
import { BiError } from 'react-icons/bi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const Input = ({ label, inputConfig, labelConfig, parentConfig, config, style, error, type, name, accept}) => {

    const [passVisible, setPassVisible] = useState(false);
    let element;

        switch (type) {
            case 'text': {
                element = <FastField type="text" name={name} {...inputConfig} style={{borderColor: error && 'red'}} />
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
            default:
                element = null
                break;
        }

        useEffect(() => {
            console.log('hi')
        }, [passVisible])

        console.log(inputConfig)
    return (
        <div className={classes.InputWrapper} {...parentConfig}>
            <label {...labelConfig}>{label}</label>
            {/* <FastField {...config} style={{borderColor: error && 'red'}}/> */}
            {element}
            {
                error &&
                <p className={classes.DesktopError}>{error}</p>
            }
            {
                error &&
                <p className={classes.MobileError}><BiError />&nbsp;{error}</p>
            }
        </div>
        // <div className={classes.InputWrapper} style={style} {...parentConfig}>
        //     <label {...labelConfig}>{label}</label>
        //     <FastField {...config} style={{borderColor: error && 'red'}}/>
        //     {element}
        //     {
        //         error &&
        //         <p className={classes.DesktopError}>{error}</p>
        //     }
        //     {
        //         error &&
        //         <p className={classes.MobileError}><BiError />&nbsp;{error}</p>
        //     }
        // </div>
    )
}