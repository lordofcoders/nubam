<div id="content" class="center ">
    <?php
    if(!isset($user) || empty($user))
    {
    ?>
    <h2 class="three-dee page-header">Admin</h2>
    <div id="admin-login-panel" class="kba-panel drop-shadow curved curved-hz-2">
        <table class="light form-table">
            <tbody>
                <tr>
                    <td>
                        <label for="email">
                            E-mail: 
                        </label>
                    </td>
                    <td>
                        <input id="email" type="text" name="email" placeholder="E-mailinizi yaziniz.." />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="password">
                            Parola: 
                        </label>
                    </td>
                    <td>
                        <input id="password" type="password" placeholder="Parolanizi yaziniz.." name="password" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <a id="login-button" style="float:right;" class="white-gloss-button">Giris</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <?php
    }
    else 
    {
    ?>
    <div id="admin-top-panel">
        <div style="float: left;" class="large-button trans-all">
            <label loadView="category" class="selected trans-all" data-ot="Kategoriler" data-ot-delay="0" data-ot-tip-joint="top" data-ot-target="true" data-ot-style="dark">
                <div style="display: inline" class="icon-drawer-3 trans-all"></div>
            </label>
        </div>
        <div style="float: left;" class="large-button trans-all">
            <label loadView="business" class="trans-all" data-ot="İşletmeler" data-ot-delay="0" data-ot-tip-joint="top" data-ot-target="true" data-ot-style="dark">
                <div style="display: inline" class="icon-office trans-all"></div>
            </label>
        </div>
        <div style="float: left;" class="large-button trans-all">
            <label loadView="user" class="trans-all" data-ot="Kullanıcılar" data-ot-delay="0" data-ot-tip-joint="top" data-ot-target="true" data-ot-style="dark">
                <div style="display: inline" class="icon-users-2 trans-all"></div>
            </label>
        </div>
    </div>
    <div class="admin-tab">
        <div id="loadedView" class="shadowed-light triangle-isosceles top-category">
            <div class="kba-table">
                <div class="headers">
                    <div class="table-header col-1"><label>No</label></div>
                    <div class="table-header col-1"><label>Kategori Adi</label></div>
                    <div class="table-header col-2"><label>Ust Kategori</label></div>
                </div>
                <div class="data">
                    <?php $i=1; foreach($categories as $category): ?>
                    <div class="table-row">
                        <div class="table-cell col-1">
                            <a><?= $i ?></a>
                        </div>
                        <div class="table-cell col-1">
                            <a><?= $category->name ?></a>
                        </div>
                        <div class="table-cell col-2">
                            <a><?= $category->parent ?></a>
                        </div>
                    </div>
                    <?php $i++; endforeach; ?>
                </div>
            </div>
        </div>
    </div>
    <div id="admin-left-panel" class="shadowed-light">
        <div id="addItem" class="small-button trans-all">
            <label class="trans-all">
                <div style="display: inline" class="icon-plus trans-all"></div><span style="font-size: 14px;">Yeni Kategori Ekle</span>
            </label>
        </div>
    </div>
    <?php
    }
    ?>
</div>