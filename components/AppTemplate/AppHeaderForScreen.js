import AppLink from '../Link/AppLink'
import AppCommonStyles from './AppCommon.module.css'
import UserSignInIndicator from './UserSignInIndicator'

export default function AppHeaderComponent() {
  return <header className={AppCommonStyles.header} style={{background: '#f7f7f7'}}>
    <div className="maxWidthLimitedContainer">
      <div className="flexContainer">
        <nav className={AppCommonStyles.navLeft} role="navigation" aria-label="Main">
          <AppLink href="/" className={AppCommonStyles.navItem}>
              <img className={AppCommonStyles.brandLogo} src="/public/OpenCoreCMSIcon-64.png" alt="Open Core CMS logo" />
          </AppLink>

          <span className={AppCommonStyles.pipe}></span>

          <AppLink href="/journals" className={AppCommonStyles.navItem}>
            <span>Journals</span>
          </AppLink>

          <span className={AppCommonStyles.pipe}></span>

          <AppLink href="" className={`wip ${AppCommonStyles.navItem}`}>
            <span>Books</span>
          </AppLink>

          <span className={AppCommonStyles.pipe}></span>

          <AppLink href="/subjects" className={AppCommonStyles.navItem}>
            <span>Subjects</span>
          </AppLink>
        </nav>

        <nav className={AppCommonStyles.navRight} role="navigation" aria-label="User">
          <AppLink href="" className={`wip ${AppCommonStyles.navItem}`}>
            <span>Language</span>
          </AppLink>

          <span className={AppCommonStyles.pipe}></span>

          <AppLink href="" className={`wip ${AppCommonStyles.navItem}`}>
            <span>(0) Cart</span>
          </AppLink>

          <span className={AppCommonStyles.pipe}></span>

          <UserSignInIndicator />
        </nav>
      </div>
    </div>
  </header>
}
