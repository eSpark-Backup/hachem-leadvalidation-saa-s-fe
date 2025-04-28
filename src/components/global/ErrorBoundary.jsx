import React from 'react';
import PropTypes from 'prop-types';
import {
  errorModalContentStyles,
  errorModalDetailsStyles,
  errorModalHeadingStyles,
  errorModalOverlayStyles,
  errorModalTextStyles,
} from '../../styles/components/globals/ErrorBoundary';

/**
 * ErrorBoundary is a React component that catches JavaScript errors
 * anywhere in its child component tree and displays a fallback UI instead of crashing the app.
 * It also logs error details to the console.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Initialize component state to track error occurrences
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  /**
   * Lifecycle method that updates state when an error is thrown in a descendant component.
   * @param {Error} error - The error that was thrown.
   * @returns {Object} New state with error flag and error object.
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Lifecycle method that is invoked after an error has been thrown by a descendant component.
   * @param {Error} error - The caught error.
   * @param {Object} errorInfo - Additional info about the error including component stack.
   */
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  /**
   * Renders fallback UI if an error is caught, otherwise renders child components.
   * @returns {JSX.Element} The fallback UI or children.
   */
  render() {
    if (this.state?.hasError) {
      return (
        <div style={errorModalOverlayStyles}>
          <div style={errorModalContentStyles}>
            <h3 style={errorModalHeadingStyles}>Something went wrong.</h3>
            <p style={errorModalTextStyles}>{this.state?.error?.toString()}</p>
            <p style={errorModalDetailsStyles}>
              {this.state?.errorInfo?.componentStack}
            </p>
          </div>
        </div>
      );
    }

    // Render children if no error has occurred
    return this.props?.children;
  }
}

// Prop type validation to ensure `children` is provided
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
