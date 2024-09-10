@extends('layouts.master')
@section('title')
    Dashboard
@endsection
@section('content')
    {{-- breadcrumbs  --}}
@section('breadcrumb')
    @component('components.breadcrumb')
        @slot('li_1')
            Dashboard
        @endslot
        @slot('title')
            Welcome !
        @endslot
    @endcomponent
@endsection

@endsection

@section('script')
<!-- apexcharts -->


<script src="{{ URL::asset('assets/js/app.js') }}"></script>
@endsection
