<div id="content" class="center ">
    <?php if(!userExists()): ?>
    <h2 class="three-dee page-header">Admin</h2>
    <div id="admin-login-panel" class="kba-panel drop-shadow curved curved-hz-2">
        <table class="light form-table">
            <tbody>
                <tr>
                    <td>
                        <label for="userName">
                            E-mail: 
                        </label>
                    </td>
                    <td>
                        <input id="user-name" type="text" name="userName" placeholder="Kullanici adinizi yaziniz.." />
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
    <?php endif; ?>
</div>