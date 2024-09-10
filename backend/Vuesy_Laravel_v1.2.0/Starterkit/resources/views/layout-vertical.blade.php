@extends('layouts.vertical-master-layout')
@section('title')Vertical @endsection
@section('css')

<!-- plugin css -->
<link href="{{ URL::asset('assets/libs/jsvectormap/jsvectormap.min.css') }}" rel="stylesheet" type="text/css">
<!-- swiper css -->
<link href="{{ URL::asset('assets/libs/swiper/swiper-bundle.min.css') }}" rel="stylesheet" type="text/css">
@endsection
@section('content')
{{-- breadcrumbs  --}}
    @section('breadcrumb')
        @component('components.breadcrumb')
            @slot('li_1') Layouts @endslot
            @slot('title') Vertical @endslot
        @endcomponent
    @endsection

@endsection
@section('script')
<script src="{{ URL::asset('assets/js/app.js') }}"></script>

@endsection
