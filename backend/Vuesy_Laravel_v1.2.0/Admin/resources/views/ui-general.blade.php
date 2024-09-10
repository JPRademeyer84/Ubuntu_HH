@extends('layouts.master')
@section('title')General @endsection
@section('content')

    {{-- breadcrumbs  --}}
    @section('breadcrumb')
        @component('components.breadcrumb')
            @slot('li_1') UI Elements @endslot
            @slot('title') General @endslot
        @endcomponent
    @endsection
    
<div class="row">
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Default Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <span class="badge bg-primary">Primary</span>
                <span class="badge bg-secondary">Secondary</span>
                <span class="badge bg-success">Success</span>
                <span class="badge bg-info">Info</span>
                <span class="badge bg-warning">Warning</span>
                <span class="badge bg-purple">Purple</span>
                <span class="badge bg-danger">Danger</span>
                <span class="badge bg-dark">Dark</span>
                <span class="badge bg-light text-reset">Light</span>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Soft Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <span class="badge badge-soft-primary">Primary</span>
                <span class="badge badge-soft-secondary">Secondary</span>
                <span class="badge bg-success-subtle text-success">Success</span>
                <span class="badge badge-soft-info">Info</span>
                <span class="badge badge-soft-warning">Warning</span>
                <span class="badge badge-soft-purple">Purple</span>
                <span class="badge badge-soft-danger">Danger</span>
                <span class="badge badge-soft-dark text-reset">Dark</span>
                <span class="badge badge-soft-light text-reset">Light</span>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->

</div><!-- end row -->

<div class="row">

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Outline Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <span class="badge badge-outline-primary">Primary</span>
                <span class="badge badge-outline-secondary">Secondary</span>
                <span class="badge badge-outline-success">Success</span>
                <span class="badge badge-outline-info">Info</span>
                <span class="badge badge-outline-warning">Warning</span>
                <span class="badge badge-outline-purple">Purple</span>
                <span class="badge badge-outline-danger">Danger</span>
                <span class="badge badge-outline-dark text-reset">Dark</span>
                <span class="badge badge-outline-light text-reset">Light</span>
            </div><!-- end cardbody -->
        </div><!-- end card -->
    </div><!-- end col -->

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Pill Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <span class="badge rounded-pill bg-primary">Primary</span>
                <span class="badge rounded-pill bg-secondary">Secondary</span>
                <span class="badge rounded-pill bg-success">Success</span>
                <span class="badge rounded-pill bg-purple">purple</span>
                <span class="badge rounded-pill bg-info">Info</span>
                <span class="badge rounded-pill bg-warning">Warning</span>
                <span class="badge rounded-pill bg-danger">Danger</span>
                <span class="badge rounded-pill bg-dark">Dark</span>
                <span class="badge rounded-pill bg-light text-reset">Light</span>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->
</div><!-- end row -->

<div class="row">
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Rounded Soft Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <span class="badge rounded-pill badge-soft-primary">Primary</span>
                <span class="badge rounded-pill badge-soft-secondary">Secondary</span>
                <span class="badge rounded-pill bg-success-subtle text-success">Success</span>
                <span class="badge rounded-pill badge-soft-info">Info</span>
                <span class="badge rounded-pill badge-soft-warning">Warning</span>
                <span class="badge rounded-pill badge-soft-purple">Purple</span>
                <span class="badge rounded-pill badge-soft-danger">Danger</span>
                <span class="badge rounded-pill badge-soft-dark text-reset">Dark</span>
                <span class="badge rounded-pill badge-soft-light text-reset">Light</span>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Outline Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <span class="badge rounded-pill badge-outline-primary">Primary</span>
                <span class="badge rounded-pill badge-outline-secondary">Secondary</span>
                <span class="badge rounded-pill badge-outline-success">Success</span>
                <span class="badge rounded-pill badge-outline-info">Info</span>
                <span class="badge rounded-pill badge-outline-warning">Warning</span>
                <span class="badge rounded-pill badge-outline-purple">Purple</span>
                <span class="badge rounded-pill badge-outline-danger">Danger</span>
                <span class="badge rounded-pill badge-outline-dark text-reset">Dark</span>
                <span class="badge rounded-pill badge-outline-light text-reset">Light</span>
            </div><!-- end cardbody -->
        </div><!-- end card -->
    </div><!-- end col -->

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Buttons with Badges</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <div class="d-flex flex-wrap gap-3">
                    <button type="button" class="btn btn-primary">
                        Notifications <span class="badge bg-success ms-1">4</span>
                    </button>
                    <button type="button" class="btn btn-success">
                        Messages <span class="badge bg-danger ms-1">2</span>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        Draft <span class="badge bg-success ms-1">2</span>
                    </button>
                </div>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Badges Position Examples</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <div class="d-flex flex-wrap gap-3">
                    <button type="button" class="btn btn-primary position-relative">
                        Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99 <span class="visually-hidden">unread messages</span></span>
                    </button>

                    <button type="button" class="btn btn-light position-relative">
                        Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                    </button>

                    <button type="button" class="btn btn-primary position-relative p-0 avatar-sm rounded">
                        <span class="avatar-title bg-transparent">
                            <i class="bx bxs-envelope"></i>
                        </span>
                        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                    </button>

                    <button type="button" class="btn btn-light position-relative p-0 avatar-sm rounded-circle">
                        <span class="avatar-title bg-transparent text-reset">
                            <i class="bx bxs-bell"></i>
                        </span>
                    </button>

                    <button type="button" class="btn btn-light position-relative p-0 avatar-sm rounded-circle">
                        <span class="avatar-title bg-transparent text-reset">
                            <i class="bx bx-menu"></i>
                        </span>
                        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                    </button>
                </div>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->
</div><!-- end row -->

<div class="row">
    <div class="col-12">
        <div class="mt-3 mb-4">
            <h5 class="mb-0 pb-1 text-decoration-underline">Popovers & Tooltips</h5>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header justify-content-between d-flex align-items-center">
                        <h4 class="card-title">Popovers</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2">
                            <button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on top
                            </button>
                            <button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on right
                            </button>
                            <button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on bottom
                            </button>
                            <button type="button" class="btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on left
                            </button>

                            <a tabindex="0" class="btn  btn-success" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header justify-content-between d-flex align-items-center">
                        <h4 class="card-title">Tooltips</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2">
                            <button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                Tooltip on top
                            </button>
                            <button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
                                Tooltip on right
                            </button>
                            <button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                                Tooltip on bottom
                            </button>
                            <button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
                                Tooltip on left
                            </button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                Tooltip with HTML
                            </button>
                        </div>
                    </div><!-- end cardbody -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div><!-- end row -->
    </div><!-- end col -->
</div><!-- end row -->

<div class="row">
    <div class="col-12">
        <div class="mt-3 mb-4">
            <h5 class="mb-0 pb-1 text-decoration-underline">Pagination</h5>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header justify-content-between d-flex align-items-center">
                        <h4 class="card-title">Default Pagination</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>

                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <i class="mdi mdi-chevron-left"></i>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <i class="mdi mdi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header justify-content-between d-flex align-items-center">
                        <h4 class="card-title">Disabled and Active States</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>

                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <span class="page-link"><i class="mdi mdi-chevron-left"></i></span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <span class="page-link">
                                        2
                                        <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div><!-- end row -->
    </div><!-- end col -->
</div><!-- end row -->

<div class="row">
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Pagination Alignment</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Pagination Sizing</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <nav aria-label="...">
                    <ul class="pagination pagination-lg">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>

                <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div><!-- end cardbody -->
        </div><!-- end card -->
    </div><!-- end col -->

    <div class="col-xl-6">
        <div class="card">
            <div class="card-header justify-content-between d-flex align-items-center">
                <h4 class="card-title">Pagination Rounded</h4>
            </div><!-- end card header -->
            <div class="card-body">
                <nav aria-label="...">
                    <ul class="pagination pagination-rounded">
                        <li class="page-item disabled">
                            <span class="page-link"><i class="mdi mdi-chevron-left"></i></span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                            <span class="page-link">
                                2
                                <span class="sr-only">(current)</span>
                            </span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div><!-- end card body -->
        </div><!-- end card -->
    </div><!-- end col -->
</div><!-- end row -->

<div class="row">
    <div class="col-12">
        <div class="mt-3 mb-4">
            <h5 class="mb-0 pb-1 text-decoration-underline">Spinners</h5>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header justify-content-between d-flex align-items-center">
                        <h4 class="card-title">Border Spinner</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div>
                            <div class="spinner-border text-primary m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-secondary m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-success m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-info m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-warning m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-danger m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-purple m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-dark m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-border text-light m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header justify-content-between d-flex align-items-center">
                        <h4 class="card-title">Growing Spinner</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div>
                            <div class="spinner-grow text-primary m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-secondary m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-info m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-warning m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-purple m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-dark m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-light m-1" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div><!-- end row -->
    </div><!-- end col -->
</div><!-- end row -->

@endsection
@section('script')

<script src="{{ URL::asset('assets/js/app.js') }}"></script>

@endsection
