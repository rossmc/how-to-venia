import { connect } from 'src/drivers';

import Header from './header';
import { toggleSearch } from '@magento/venia-concept/esm/actions/app';

const mapStateToProps = ({ app }) => {
    const { searchOpen } = app;

    return {
        searchOpen
    };
};

const mapDispatchToProps = { toggleSearch };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
