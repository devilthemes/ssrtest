import axios from 'axios';

// Base API URL
const API_URL = 'http://localhost:5024/api/Enquiry/';

// Generic function to handle API requests
const apiRequest = async (method, endpoint, data = null) => {
  try {
    const response = await axios({
      method: method,
      url: `${API_URL}${endpoint}`,
      data: data,
    });
    return response.data; // Return response data on success
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} request to ${endpoint}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

// Submit enquiry
const submitEnquiry = async (formData) => {
  return apiRequest('post', 'saveEnquiry', formData);
};

// Fetch enquiry types
const fetchEnquiryTypes = async () => {
  return apiRequest('get', 'enquiryTypes');
};

// Export the service functions
export default {
  submitEnquiry,
  fetchEnquiryTypes,
};