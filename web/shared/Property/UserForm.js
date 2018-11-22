import React from 'react';
import { withFormik } from 'formik';
//import Yup from 'yup';
import * as Yup from 'yup';

class UserForm extends React.Component {
  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;
    return (
      <form className="p-5" onSubmit={handleSubmit}>
        <div
          className="outerCon"
          style={{ float: 'left', marginBottom: '20px', position: 'relative' }}
        >
          <input
            name="livingSurface"
            type="text"
            className={`form-control ${errors.livingSurface &&
              touched.livingSurface &&
              'is-invalid'}`}
            value={values.livingSurface}
            onChange={handleChange}
            placeholder="Living Surface"
            onBlur={handleBlur}
            style={{
              height: '50px',
              width: '300px',
              borderRadius: '5px',
              marginBottom: '10px',
              marginRight: 20,
              backgroundColor: '#edeeee',
              border: 'none',
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />
          {errors.livingSurface && touched.livingSurface && (
            <div
              className="invalid-feedback"
              style={{ position: 'absolute', bottom: '-10px', color: 'red' }}
            >
              {errors.livingSurface}
            </div>
          )}
        </div>
        <div
          className="outerCon"
          style={{ float: 'left', marginBottom: '20px', position: 'relative' }}
        >
          <input
            name="landSurface"
            type="text"
            className={`form-control ${errors.landSurface &&
              touched.landSurface &&
              'is-invalid'}`}
            value={values.landSurface}
            onChange={handleChange}
            placeholder="Land Surface"
            onBlur={handleBlur}
            style={{
              height: '50px',
              width: '300px',
              borderRadius: '5px',
              marginBottom: '10px',
              marginRight: 20,
              backgroundColor: '#edeeee',
              border: 'none',
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />
          {errors.landSurface && touched.landSurface && (
            <div
              className="invalid-feedback"
              style={{ position: 'absolute', bottom: '-10px', color: 'red' }}
            >
              {errors.landSurface}
            </div>
          )}
        </div>
        <div
          className="outerCon"
          style={{ float: 'left', marginBottom: '20px', position: 'relative' }}
        >
          <input
            name="numberOfRooms"
            type="text"
            className={`form-control ${errors.numberOfRooms &&
              touched.numberOfRooms &&
              'is-invalid'}`}
            value={values.numberOfRooms}
            onChange={handleChange}
            placeholder="Number of rooms"
            onBlur={handleBlur}
            style={{
              height: '50px',
              width: '300px',
              borderRadius: '5px',
              marginBottom: '10px',
              marginRight: 20,
              backgroundColor: '#edeeee',
              border: 'none',
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />
          {errors.numberOfRooms && touched.numberOfRooms && (
            <div
              className="invalid-feedback"
              style={{ position: 'absolute', bottom: '-10px', color: 'red' }}
            >
              {errors.numberOfRooms}
            </div>
          )}
        </div>
        <div
          className="outerCon"
          style={{ float: 'left', marginBottom: '20px', position: 'relative' }}
        >
          <input
            name="numberOfParkings"
            type="text"
            className={`form-control ${errors.numberOfParkings &&
              touched.numberOfParkings &&
              'is-invalid'}`}
            value={values.numberOfParkings}
            onChange={handleChange}
            placeholder="Number of parkings"
            onBlur={handleBlur}
            style={{
              height: '50px',
              width: '300px',
              borderRadius: '5px',
              marginBottom: '10px',
              marginRight: 20,
              backgroundColor: '#edeeee',
              border: 'none',
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />
          {errors.numberOfParkings && touched.numberOfParkings && (
            <div
              className="invalid-feedback"
              style={{ position: 'absolute', bottom: '-10px', color: 'red' }}
            >
              {errors.numberOfParkings}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={isSubmitting}
          style={{
            float: 'right',
            marginTop: 160,
            width: 100,
            backgroundColor: '#327ccb',
            height: 35,
            color: '#fff',
            borderRadius: 5,
          }}
        >
          {isSubmitting ? 'LOADING' : 'SAVE'}
        </button>
      </form>
    );
  }
}
export default withFormik({
  mapPropsToValues: props => ({
    livingSurface: props.user.livingSurface,
    landSurface: props.user.landSurface,
    numberOfRooms: props.user.numberOfRooms,
    numberOfParkings: props.user.numberOfParkings,
  }),

  validationSchema: Yup.object().shape({
    livingSurface: Yup.string().required('Living Surface is required!'),
    landSurface: Yup.string().required('Land Surface is required!'),
    numberOfRooms: Yup.string().required('Number of rooms is required!'),
    numberOfParkings: Yup.string().required('Number of parkings is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit({
      property: values,
    });
    setSubmitting(false);
    // window.location.href = './'
  },
})(UserForm);
