import { connect } from 'src/drivers';
import Foo from './Foo';
 
const mapStateToProps = ({ foo }) => ({ foo });
 
export default connect(
    mapStateToProps,
)(Foo);