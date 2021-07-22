const Container = props => {
    const styles = {
        maxWidth: '1280px',
        margin: '0 auto'
    }
    return <div style={styles}>{props.children}</div>
}

export default Container;