<!DOCTYPE html>
<html lang="en">
<?php require 'common/head.php'; ?>
<body class="fix-header fix-sidebar card-no-border">
    <div class="preloader">
        <div class="loader">
            <div class="loader__figure"></div>
            <p class="loader__label">JESSICA</p>
        </div>
    </div>
    <!-- Main wrapper - style you can find in pages.scss -->
    <div id="main-wrapper">
        <!-- Topbar header -->
        <?php require 'components/top-nav.php' ?>
        <!-- End Topbar header -->
        <!-- Left Sidebar -->
        <?php require 'components/side-nav.php' ?>
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Container fluid  -->
            <div class="container-fluid">

                <!-- Bread crumb and right sidebar toggle -->

                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-themecolor">Dashboard 1</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard 1</li>
                        </ol>
                    </div>
                </div>

                <!-- End Bread crumb and right sidebar toggle -->


                <!-- Info box -->

                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex p-10 no-block">
                                    <div class="align-slef-center">
                                        <h2 class="m-b-0">234</h2>
                                        <h6 class="text-muted m-b-0">New Clients</h6>
                                    </div>
                                    <div class="align-self-center display-6 ml-auto"><i class="text-success icon-Target-Market"></i></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex p-10 no-block">
                                    <div class="align-slef-center">
                                        <h2 class="m-b-0">$6,759</h2>
                                        <h6 class="text-muted m-b-0">This Week</h6>
                                    </div>
                                    <div class="align-self-center display-6 ml-auto"><i class="text-info icon-Dollar-Sign"></i></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex p-10 no-block">
                                    <div class="align-slef-center">
                                        <h2 class="m-b-0">2,356</h2>
                                        <h6 class="text-muted m-b-0">Emails Sent</h6>
                                    </div>
                                    <div class="align-self-center display-6 ml-auto"><i class="text-primary icon-Inbox-Forward"></i></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex p-10 no-block">
                                    <div class="align-slef-center">
                                        <h2 class="m-b-0">38</h2>
                                        <h6 class="text-muted m-b-0">Deals in Pipeline</h6>
                                    </div>
                                    <div class="align-self-center display-6 ml-auto"><i class="text-danger icon-Contrast"></i></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:70%; height:3px;"> <span class="sr-only">50% Complete</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                </div>

                <!-- End Info box -->


                <!-- Over Visitor, Our income , slaes different and  sales prediction -->

                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex m-b-30 no-block">
                                    <h5 class="card-title m-b-0 align-self-center">Our Visitors</h5>
                                    <div class="ml-auto">
                                        <select class="custom-select b-0">
                                            <option selected="">Today</option>
                                            <option value="1">Tomorrow</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="visitor" style="height:260px; width:100%;"></div>
                                <ul class="list-inline m-t-30 text-center font-12">
                                    <li><i class="fa fa-circle text-purple"></i> Tablet</li>
                                    <li><i class="fa fa-circle text-success"></i> Desktops</li>
                                    <li><i class="fa fa-circle text-info"></i> Mobile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <div class="col-lg-4 col-md-12">
                        <div class="card o-income">
                            <div class="card-body">
                                <div class="d-flex m-b-30 no-block">
                                    <h5 class="card-title m-b-0 align-self-center">Our Income</h5>
                                    <div class="ml-auto">
                                        <select class="custom-select b-0">
                                            <option selected="">January</option>
                                            <option value="1">February</option>
                                            <option value="2">March</option>
                                            <option value="3">April</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="income" style="height:260px; width:100%;"></div>
                                <ul class="list-inline m-t-30 text-center font-12">
                                    <li><i class="fa fa-circle text-success"></i> Growth</li>
                                    <li><i class="fa fa-circle text-info"></i> Net</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <div class="col-lg-4 col-md-12">
                        <div class="row">
                            <!-- Column -->
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Sales Difference</h5>
                                        <div class="d-flex no-block">
                                            <div class="align-self-center no-shrink">
                                                <h2 class="m-b-0">$4316</h2>
                                                <h6 class="text-muted">(150-165 Sales)</h6>
                                            </div>
                                            <div class="ml-auto">
                                                <div id="sales" class="" style=" width:150px; height:140px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Sales Prediction</h5>
                                        <div class="d-flex no-block">
                                            <div class="align-self-end no-shrink">
                                                <h2 class="m-b-0">$3528</h2>
                                                <h6 class="text-muted">(150-165 Sales)</h6>
                                            </div>
                                            <div class="ml-auto">
                                                <div id="prediction"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                        </div>
                    </div>
                </div>

                <!-- Sales Chart and browser state-->

                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <div>
                                        <h5 class="card-title m-b-0">Sales Chart</h5>
                                    </div>
                                    <div class="ml-auto">
                                        <ul class="list-inline text-center font-12">
                                            <li><i class="fa fa-circle text-success"></i> SITE A</li>
                                            <li><i class="fa fa-circle text-info"></i> SITE B</li>
                                            <li><i class="fa fa-circle text-primary"></i> SITE C</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="" id="sales-chart" style="height: 355px;"></div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Browser Stats</h5>
                                <table class="table browser m-t-30 no-border">
                                    <tbody>
                                        <tr>
                                            <td style="width:40px"><img src="assets/images/browser/chrome-logo.png" alt="logo"></td>
                                            <td>Google Chrome</td>
                                            <td class="text-right">23%</td>
                                        </tr>
                                        <tr>
                                            <td><img src="assets/images/browser/firefox-logo.png" alt="logo"></td>
                                            <td>Mozila Firefox</td>
                                            <td class="text-right">15%</td>
                                        </tr>
                                        <tr>
                                            <td><img src="assets/images/browser/safari-logo.png" alt="logo"></td>
                                            <td>Apple Safari</td>
                                            <td class="text-right">07%</td>
                                        </tr>
                                        <tr>
                                            <td><img src="assets/images/browser/internet-logo.png" alt="logo"></td>
                                            <td>Internet Explorer</td>
                                            <td class="text-right">09%</td>
                                        </tr>
                                        <tr>
                                            <td><img src="assets/images/browser/opera-logo.png" alt="logo"></td>
                                            <td>Opera mini</td>
                                            <td class="text-right">23%</td>
                                        </tr>
                                        <tr>
                                            <td><img src="assets/images/browser/netscape-logo.png" alt="logo"></td>
                                            <td>Netscape Navigator</td>
                                            <td class="text-right">04%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- End Sales Chart -->


                <!-- Projects of the Month -->

                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <h5 class="card-title">Projects of the Month</h5>
                                    </div>
                                    <div class="ml-auto">
                                        <select class="custom-select b-0">
                                            <option selected="">January</option>
                                            <option value="1">February</option>
                                            <option value="2">March</option>
                                            <option value="3">April</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="table-responsive m-t-20 no-wrap">
                                    <table class="table vm no-th-brd pro-of-month">
                                        <thead>
                                            <tr>
                                                <th colspan="2">Assigned</th>
                                                <th>Name</th>
                                                <th>Priority</th>
                                                <th>Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="width:50px;"><span class="round">S</span></td>
                                                <td>
                                                    <h6>Sunil Joshi</h6><small class="text-muted">Web Designer</small></td>
                                                <td>Elite Admin</td>
                                                <td><span class="label label-success label-rounded">Low</span></td>
                                                <td>$3.9K</td>
                                            </tr>
                                            <tr class="active">
                                                <td><span class="round"><img src="assets/images/users/2.jpg" alt="user" width="50"></span></td>
                                                <td>
                                                    <h6>Andrew</h6><small class="text-muted">Project Manager</small></td>
                                                <td>Real Homes</td>
                                                <td><span class="label label-info label-rounded">Medium</span></td>
                                                <td>$23.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span class="round round-success">B</span></td>
                                                <td>
                                                    <h6>Bhavesh patel</h6><small class="text-muted">Developer</small></td>
                                                <td>MedicalPro Theme</td>
                                                <td><span class="label label-primary label-rounded">High</span></td>
                                                <td>$12.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span class="round round-primary">N</span></td>
                                                <td>
                                                    <h6>Nirav Joshi</h6><small class="text-muted">Frontend Eng</small></td>
                                                <td>Elite Admin</td>
                                                <td><span class="label label-danger label-rounded">Low</span></td>
                                                <td>$10.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span class="round round-warning">M</span></td>
                                                <td>
                                                    <h6>Micheal Doe</h6><small class="text-muted">Content Writer</small></td>
                                                <td>Helping Hands</td>
                                                <td><span class="label label-success label-rounded">High</span></td>
                                                <td>$12.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span class="round round-danger">N</span></td>
                                                <td>
                                                    <h6>Johnathan</h6><small class="text-muted">Graphic</small></td>
                                                <td>Digital Agency</td>
                                                <td><span class="label label-info label-rounded">High</span></td>
                                                <td>$2.6K</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <div>
                                        <h5 class="card-title m-b-0">Weather</h5>
                                    </div>
                                    <div class="ml-auto">
                                        <select class="custom-select b-0">
                                            <option selected="">January</option>
                                            <option value="1">February</option>
                                            <option value="2">March</option>
                                            <option value="3">April</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center flex-row m-t-30">
                                    <div class="p-2 display-5 text-info"><i class="wi wi-day-showers"></i> <span>73<sup>°</sup></span></div>
                                    <div class="p-2">
                                        <h3 class="m-b-0">Saturday</h3><small>Ahmedabad, India</small></div>
                                </div>
                                <table class="table no-border">
                                    <tbody>
                                        <tr>
                                            <td>Wind</td>
                                            <td class="font-medium">ESE 17 mph</td>
                                        </tr>
                                        <tr>
                                            <td>Humidity</td>
                                            <td class="font-medium">83%</td>
                                        </tr>
                                        <tr>
                                            <td>Pressure</td>
                                            <td class="font-medium">28.56 in</td>
                                        </tr>
                                        <tr>
                                            <td>Cloud Cover</td>
                                            <td class="font-medium">78%</td>
                                        </tr>
                                        <tr>
                                            <td>Ceiling</td>
                                            <td class="font-medium">25760 ft</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-body b-t">
                                <ul class="list-unstyled row text-center city-weather-days">
                                    <li class="col"><i class="wi wi-day-sunny"></i><span>09:30</span>
                                        <h3>70<sup>°</sup></h3></li>
                                    <li class="col"><i class="wi wi-day-cloudy"></i><span>11:30</span>
                                        <h3>72<sup>°</sup></h3></li>
                                    <li class="col"><i class="wi wi-day-hail"></i><span>13:30</span>
                                        <h3>75<sup>°</sup></h3></li>
                                    <li class="col"><i class="wi wi-day-sprinkle"></i><span>15:30</span>
                                        <h3>76<sup>°</sup></h3></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- End Projects of the Month -->


                <!-- Comment - chats -->

                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Recent Comments</h5>
                            </div>

                            <!-- Comment widgets -->

                            <div class="comment-widgets">
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row">
                                    <div class="p-2"><span class="round"><img src="assets/images/users/1.jpg" alt="user" width="50"></span></div>
                                    <div class="comment-text w-100">
                                        <h5>James Anderson</h5>
                                        <p class="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        <div class="comment-footer">
                                            <span class="text-muted pull-right">April 14, 2016</span> <span class="label label-rounded label-info">Pending</span> <span class="action-icons">
                                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                                    <a href="javascript:void(0)"><i class="ti-heart"></i></a>
                                                </span> </div>
                                    </div>
                                </div>
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row">
                                    <div class="p-2"><span class="round"><img src="assets/images/users/2.jpg" alt="user" width="50"></span></div>
                                    <div class="comment-text active w-100">
                                        <h5>Michael Jorden</h5>
                                        <p class="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>
                                        <div class="comment-footer ">
                                            <span class="text-muted pull-right">April 14, 2016</span>
                                            <span class="label label-success label-rounded">Approved</span>
                                            <span class="action-icons active">
                                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)"><i class="icon-close"></i></a>
                                                    <a href="javascript:void(0)"><i class="ti-heart text-danger"></i></a>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row">
                                    <div class="p-2"><span class="round"><img src="assets/images/users/3.jpg" alt="user" width="50"></span></div>
                                    <div class="comment-text w-100">
                                        <h5>Johnathan Doeting</h5>
                                        <p class="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        <div class="comment-footer">
                                            <span class="text-muted pull-right">April 14, 2016</span>
                                            <span class="label label-rounded label-danger">Rejected</span>
                                            <span class="action-icons">
                                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                                    <a href="javascript:void(0)"><i class="ti-heart"></i></a>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Recent Chats</h5>
                                <div class="chat-box">
                                    <!--chat Row -->
                                    <ul class="chat-list">
                                        <!--chat Row -->
                                        <li>
                                            <div class="chat-img"><img src="assets/images/users/1.jpg" alt="user"></div>
                                            <div class="chat-content">
                                                <h5>James Anderson</h5>
                                                <div class="box bg-light-info">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                            </div>
                                            <div class="chat-time">10:56 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li>
                                            <div class="chat-img"><img src="assets/images/users/2.jpg" alt="user"></div>
                                            <div class="chat-content">
                                                <h5>Bianca Doe</h5>
                                                <div class="box bg-light-info">It’s Great opportunity to work.</div>
                                            </div>
                                            <div class="chat-time">10:57 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li class="odd">
                                            <div class="chat-content">
                                                <div class="box bg-light-inverse">I would love to join the team.</div>
                                                <br>
                                            </div>
                                            <div class="chat-time">10:58 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li class="odd">
                                            <div class="chat-content">
                                                <div class="box bg-light-inverse">Whats budget of the new project.</div>
                                                <br>
                                            </div>
                                            <div class="chat-time">10:59 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li>
                                            <div class="chat-img"><img src="assets/images/users/3.jpg" alt="user"></div>
                                            <div class="chat-content">
                                                <h5>Angelina Rhodes</h5>
                                                <div class="box bg-light-info">Well we have good budget for the project</div>
                                            </div>
                                            <div class="chat-time">11:00 am</div>
                                        </li>
                                        <!--chat Row -->
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body b-t">
                                <div class="row">
                                    <div class="col-8">
                                        <textarea placeholder="Type your message here" class="form-control b-0"></textarea>
                                    </div>
                                    <div class="col-4 text-right">
                                        <button type="button" class="btn btn-info btn-circle btn-lg"><i class="fa fa-paper-plane-o"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- End Comment - chats -->


                <!-- End Page Content -->


                <!-- Right sidebar -->

                <!-- .right-sidebar -->
                <div class="right-sidebar">
                    <div class="slimscrollright">
                        <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span> </div>
                        <div class="r-panel-body">
                            <ul id="themecolors" class="m-t-20">
                                <li><b>With Light sidebar</b></li>
                                <li><a href="javascript:void(0)" data-theme="default" class="default-theme">1</a></li>
                                <li><a href="javascript:void(0)" data-theme="green" class="green-theme">2</a></li>
                                <li><a href="javascript:void(0)" data-theme="red" class="red-theme">3</a></li>
                                <li><a href="javascript:void(0)" data-theme="blue" class="blue-theme">4</a></li>
                                <li><a href="javascript:void(0)" data-theme="purple" class="purple-theme">5</a></li>
                                <li><a href="javascript:void(0)" data-theme="megna" class="megna-theme">6</a></li>
                                <li class="d-block m-t-30"><b>With Dark sidebar</b></li>
                                <li><a href="javascript:void(0)" data-theme="default-dark" class="default-dark-theme working">7</a></li>
                                <li><a href="javascript:void(0)" data-theme="green-dark" class="green-dark-theme">8</a></li>
                                <li><a href="javascript:void(0)" data-theme="red-dark" class="red-dark-theme">9</a></li>
                                <li><a href="javascript:void(0)" data-theme="blue-dark" class="blue-dark-theme">10</a></li>
                                <li><a href="javascript:void(0)" data-theme="purple-dark" class="purple-dark-theme">11</a></li>
                                <li><a href="javascript:void(0)" data-theme="megna-dark" class="megna-dark-theme ">12</a></li>
                            </ul>
                            <ul class="m-t-20 chatonline">
                                <li><b>Chat option</b></li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/1.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/2.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/3.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/4.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/5.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/6.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/7.jpg" alt="user-img" class="img-circle"> <span>Hritik Roshan<small class="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="assets/images/users/8.jpg" alt="user-img" class="img-circle"> <span>Pwandeep rajan <small class="text-success">online</small></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- End Right sidebar -->

            </div>

            <!-- End Container fluid  -->


            <!-- footer -->

            <footer class="footer"> &copy; <?php echo date(Y); ?> | Jr Sarath </footer>

            <!-- End footer -->

        </div>

        <!-- End Page wrapper  -->

    </div>

    <!-- End Wrapper -->

    <?php require 'common/scripts.php' ?>
</body>
</html>
