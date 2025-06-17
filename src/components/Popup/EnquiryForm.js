import React, { useState, useEffect } from 'react';
import enquiryService from '../services/enquiryService'; // Import the service

const EnquiryForm = ({ onClose }) => {
  const [formType, setFormType] = useState('individual');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [street, setStreet] = useState('');
  const [streetLine2, setStreetLine2] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [enquiryTypes, setEnquiryTypes] = useState([]);
  const [status, setStatus] = useState({ type: '', message: '' }); // For success/error messages

  // Fetch enquiry types on component mount
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const types = await enquiryService.fetchEnquiryTypes();
        setEnquiryTypes(types);
      } catch (error) {
        console.error('Failed to fetch enquiry types:', error);
      }
    };
    fetchTypes();
  }, []);

  // Fetch address suggestions from an API (e.g., OpenStreetMap Nominatim)
  const fetchAddressSuggestions = async (query) => {
    if (query.length < 3) return; // Only fetch after 3 characters are typed
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1`
      );
      const data = await response.json();
      setAddressSuggestions(data);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
    }
  };

  // Handle street address input change
  const handleStreetChange = (e) => {
    const value = e.target.value;
    setStreet(value);
    fetchAddressSuggestions(value);
  };

  // Handle address selection from suggestions
  const handleAddressSelect = (suggestion) => {
    const address = suggestion.address;
    setStreet(suggestion.display_name);
    setStreetLine2(address.house_number || address.road || '');
    setCity(address.city || address.town || address.village || '');
    setRegion(address.state || address.region || '');
    setPostcode(address.postcode || '');
    setCountry(address.country || '');
    setAddressSuggestions([]); // Clear suggestions
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const enquiryFormData = {
      formType,
      firstName,
      lastName,
      companyName,
      email,
      phone,
      enquiryType,
      street,
      streetLine2,
      city,
      region,
      postcode,
      country,
      message,
      dateSubmitted: new Date().toISOString(),
    };

    try {
      await enquiryService.submitEnquiry(enquiryFormData); // Call the service to send data to the backend
      setStatus({ type: 'success', message: 'Enquiry submitted successfully!' });
      setTimeout(() => {
        onClose(); // Close the form modal after 2 seconds
      }, 2000);
    } catch (error) {
      setStatus({ type: 'error', message: 'There was an error submitting your enquiry. Please try again.' });
    }
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body p-4">
            {/* Success/Error Message */}
            {status.type && (
              <div
                className={`alert ${
                  status.type === 'success' ? 'alert-success' : 'alert-danger'
                }`}
                role="alert"
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Form Type Selection */}
              <div className="mb-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="formType"
                    id="individual"
                    value="individual"
                    checked={formType === 'individual'}
                    onChange={(e) => setFormType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="individual">
                    For Individual
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="formType"
                    id="company"
                    value="company"
                    checked={formType === 'company'}
                    onChange={(e) => setFormType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="company">
                    For Company
                  </label>
                </div>
              </div>

              {/* Name Fields */}
              {formType === 'individual' ? (
                <>
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <label className="form-label">First Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <label className="form-label">Last Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Company Name</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="row mb-3">
                <div className="col-md-3">
                  <label className="form-label">Email Address</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-3">
                  <label className="form-label">Phone Number</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="tel"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Enquiry Type */}
              <div className="row mb-3">
                <div className="col-md-3">
                  <label className="form-label">Enquiry Type</label>
                </div>
                <div className="col-md-9">
                  <select
                    className="form-select"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    required
                  >
                    <option value="">Select Enquiry Type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Address Section */}
              <div className="mb-4">
                <h5>Address:</h5>
                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Street Address</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={street}
                      onChange={handleStreetChange}
                      placeholder="Enter your street address"
                    />
                    {addressSuggestions.length > 0 && (
                      <ul className="list-group mt-2">
                        {addressSuggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleAddressSelect(suggestion)}
                          >
                            {suggestion.display_name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Street Address Line 2</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={streetLine2}
                      onChange={(e) => setStreetLine2(e.target.value)}
                      placeholder="Enter additional address details"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">City</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Region</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      placeholder="Enter your region"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Postal / Zip Code</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      placeholder="Enter your postal code"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Country</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Enter your country"
                    />
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div className="mb-4">
                <div className="row">
                  <div className="col-md-3">
                    <label className="form-label">Message</label>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;