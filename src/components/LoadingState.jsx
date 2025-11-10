function LoadingState({ message = 'Loading awesome things...' }) {
  return (
    <div className="loading-state">
      <div className="loading-state__spinner" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

export default LoadingState;
