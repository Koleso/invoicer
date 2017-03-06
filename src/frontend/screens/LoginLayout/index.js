import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// Components
import Link from 'components/Link';

// CSS
import './index.less';

export default class Button extends React.Component {

	static propTypes = {
		children: T.node,
		page: T.string,
	};

	render() {
		const bm = 'LoginLayout';
		const {
			children,
			page,
		} = this.props;

		const bottomLinkLogin = (<p>
			Nemáte uživatelský účet? &nbsp;
			<Link to="/registrace" className="Link">
				Vytvořte si ho!
			</Link>
		</p>);

		const bottomLinkSignup = (<p>
			Máte již uživatelský účet? &nbsp;
			<Link to="/registrace" className="Link">
				Přihlašte se!
			</Link>
		</p>);

		return (
			<div className={cx(bm, '')}>
				<div className={cx(bm, 'image')}></div>
				<div className={cx(bm, 'content')}>
					<div className={cx(bm, 'top')}>
						<div className={cx(bm, 'form')}>
							{children}
						</div>
					</div>
					<div className={cx(bm, 'bottom')}>
						{(page === 'login' ? bottomLinkLogin : bottomLinkSignup)}
					</div>
				</div>
			</div>
		);
	}
}
