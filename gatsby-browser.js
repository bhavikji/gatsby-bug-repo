export const onServiceWorkerUpdateReady = () => {
    console.log('updated');
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )

    if (answer === true) {
        console.log('got answer')
        window.location.reload()
    }
}