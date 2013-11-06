<div class="confirm-user-wrapper">
    <div class="confirm-user shadowed">
        <?php if($activated) { ?>
        <div class="button-panel">
            <p style="color: #63DB3F;padding: 23px;margin-top: 20px;">Your account has been activated.</p>
            <a href="<?= EventManager::$base ?>home" class="white-gloss-button trans-all" style="margin: 0px auto;display: block;width: 60px;text-align: center;">Go Home</a>
        </div>
        <?php } else { ?>
        <div class="button-panel">
            <p style="color: #e8003a;padding: 23px;margin-top: 20px;">Sorry, there has been a problem. Please signup again.</p>
            <a href="<?= EventManager::$base ?>home" class="white-gloss-button trans-all" style="margin: 0px auto;display: block;width: 60px;text-align: center;">Go Home</a>
        </div>
        <?php } ?>
    </div>
</div>


