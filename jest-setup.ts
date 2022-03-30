import '@testing-library/jest-dom';

process.on('unhandledRejection', (reason, promise) => {
    console.log('reason: ', reason, 'promise: ', promise);
    /* Заглушка в node для window.addEventListener('unhandledrejection') */
});
