<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">


     <!-- LOGO -->
     <div class="navbar-brand-box">
        <a href="{{ url('index') }}" class="logo logo-dark">
            <span class="logo-sm">
                <img src="{{URL::asset('assets/images/logo-sm.svg')}}" alt="" height="26">
            </span>
            <span class="logo-lg">
                <img src="{{URL::asset('assets/images/logo-sm.svg')}}" alt="" height="26"> <span class="logo-txt">Vuesy</span>
            </span>
        </a>

        <a href="{{ url('index') }}" class="logo logo-light">
            <span class="logo-sm">
                <img src="{{URL::asset('assets/images/logo-sm.svg')}}" alt="" height="26">
            </span>
            <span class="logo-lg">
                <img src="{{URL::asset('assets/images/logo-sm.svg')}}" alt="" height="26"> <span class="logo-txt">Vuesy</span>
            </span>
        </a>
    </div>

    <button type="button" class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn">
        <i class="fa fa-fw fa-bars"></i>
    </button>

    <div data-simplebar class="sidebar-menu-scroll">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" data-key="t-menu">Menu</li>

                <li>
                    <a href="{{ url('index') }}">
                        <i class="bx bx-home-circle nav-icon"></i>
                        <span class="menu-item" data-key="t-dashboard">Dashboard</span>
                    </a>
                </li>

                <li class="menu-title" data-key="t-layouts">Layouts</li>
                
                <li>
                    <a href="layout-vertical">
                        <i class="bx bx-layout nav-icon"></i>
                        <span class="menu-item" data-key="t-verfical">Vertical</span>
                    </a>
                </li>

                <li class="menu-title" data-key="t-pages">Pages</li>

                <li>
                    <a href="javascript: void(0);">
                        <i class="bx bx-user nav-icon"></i>
                        <span class="menu-item" data-key="t-authentication">Authentication</span>
                        <span class="badge rounded-pill bg-info">9</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-signin">Sign In</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-signin-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-signin-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-signup">Sign Up</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-signup-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-signup-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-signout">Sign Out</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-signout-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-signout-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-lock-screen">Lock Screen</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-lockscreen-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-lockscreen-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-forgot-password">Forgot Password</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-forgotpassword-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-forgotpassword-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-reset-password">Reset Password</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-resetpassword-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-resetpassword-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-email-verification">Email Verification</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-emailverification-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-emailverification-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-2step-verification">2-step Verification</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-2step-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-2step-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-thankyou">Thank you</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="auth-thankyou-basic" data-key="t-basic">Basic</a></li>
                                <li><a href="auth-thankyou-cover" data-key="t-cover">Cover</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i class="bx bx-info-circle nav-icon"></i>
                        <span class="menu-item" data-key="t-error-pages">Error Pages</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="error-404-basic" data-key="t-error-404-basic">404 Basic</a></li>
                        <li><a href="error-404-cover" data-key="t-error-404-cover">404 Cover</a></li>
                        <li><a href="error-500-basic" data-key="t-error-500-basic">500 Basic</a></li>
                        <li><a href="error-500-cover" data-key="t-error-500-cover">500 Cover</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i class="bx bx-file-blank nav-icon"></i>
                        <span class="menu-item" data-key="t-utility">Utility</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="pages-starter" data-key="t-starter-page">Starter Page</a></li>
                        <li><a href="pages-maintenance" data-key="t-maintenance">Maintenance</a></li>
                        <li><a href="pages-comingsoon" data-key="t-coming-soon">Coming Soon</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i class="bx bx-share-alt nav-icon"></i>
                        <span class="menu-item" data-key="t-multi-level">Multi Level</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);" data-key="t-level-1.1">Level 1.1</a></li>
                        <li><a href="javascript: void(0);" class="has-arrow" data-key="t-level-1.2">Level 1.2</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" data-key="t-level-2.1">Level 2.1</a></li>
                                <li><a href="javascript: void(0);" data-key="t-level-2.2">Level 2.2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->